import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useSiteContent } from '@/hooks/useSiteContent';
import { formatValueForEditor } from '@/lib/site-content';

const Admin = () => {
  const { raw, isLoading, isSaving, updateItem, refetch } = useSiteContent();
  const [selectedKey, setSelectedKey] = useState<string>('');
  const [editorValue, setEditorValue] = useState('');
  const [newKey, setNewKey] = useState('');
  const [newValue, setNewValue] = useState('');

  const items = useMemo(
    () => Object.keys(raw).sort(),
    [raw]
  );

  const handleSelect = (key: string) => {
    setSelectedKey(key);
    setEditorValue(formatValueForEditor(raw[key]));
  };

  const handleSave = async () => {
    if (!selectedKey) return;
    let value: any = editorValue;

    try {
      value = JSON.parse(editorValue);
    } catch {
      value = editorValue;
    }

    await updateItem({ key: selectedKey, value });
    refetch();
  };

  const handleCreate = async () => {
    if (!newKey) return;
    let value: any = newValue;

    try {
      value = JSON.parse(newValue);
    } catch {
      value = newValue;
    }

    await updateItem({ key: newKey, value });
    setNewKey('');
    setNewValue('');
    refetch();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Site Content Admin</h1>
            <p className="text-muted-foreground mt-2 max-w-2xl">
              Edit any page text or image URL from one place. Use JSON values for lists and structured blocks.
            </p>
          </div>
          <Button onClick={() => refetch()} disabled={isLoading || isSaving}>
            Refresh Content
          </Button>
        </div>

        <div className="grid lg:grid-cols-[320px_minmax(0,1fr)] gap-8">
          <div className="space-y-4">
            <div className="rounded-3xl border border-border bg-card p-4 shadow-sm">
              <h2 className="font-semibold mb-3">Content keys</h2>
              {isLoading ? (
                <div>Loading...</div>
              ) : (
                <div className="space-y-2 max-h-[65vh] overflow-y-auto pr-2">
                  {items.map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => handleSelect(key)}
                      className={`block w-full text-left rounded-2xl px-3 py-2 text-sm transition-all ${selectedKey === key ? 'bg-accent/10 text-accent' : 'hover:bg-muted'}`}
                    >
                      {key}
                    </button>
                  ))}
                  {items.length === 0 && <p className="text-sm text-muted-foreground">No saved content items yet.</p>}
                </div>
              )}
            </div>

            <div className="rounded-3xl border border-border bg-card p-4 shadow-sm">
              <h2 className="font-semibold mb-3">Create new key</h2>
              <div className="space-y-4">
                <Input
                  placeholder="hero.sectionLabel"
                  value={newKey}
                  onChange={(event) => setNewKey(event.target.value)}
                />
                <Textarea
                  placeholder='Enter value or JSON, e.g. "My heading" or ["a","b"]'
                  value={newValue}
                  onChange={(event) => setNewValue(event.target.value)}
                />
                <Button onClick={handleCreate} disabled={!newKey || !newValue || isSaving}>
                  Create content item
                </Button>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="font-semibold">Edit content value</h2>
                <p className="text-sm text-muted-foreground">Selected key: {selectedKey || 'None'}</p>
              </div>
              <Button onClick={handleSave} disabled={!selectedKey || isSaving || isLoading}>
                Save
              </Button>
            </div>
            <Textarea
              value={editorValue}
              onChange={(event) => setEditorValue(event.target.value)}
              className="min-h-[320px]"
            />
            <p className="text-sm text-muted-foreground mt-3">
              If your value is JSON, enter valid JSON. Otherwise the input is stored as plain text.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
